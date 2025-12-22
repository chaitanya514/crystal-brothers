"use client";

import { createContext, useContext, useEffect, useState ,useRef} from "react";
import { doc, setDoc, getDoc, onSnapshot } from "firebase/firestore";
import { db, auth } from "../lib/firebase";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isFromFirebase, setIsFromFirebase] = useState(false); // prevent loop

  const isSyncingFromFirebase = useRef(false);
  const initialized = useRef(false);

  console.log("cart.....",cart)

  // -------------------------
  // Load cart on first load (localStorage)
  // -------------------------
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  // -------------------------
  // Save cart to localStorage on change
  // -------------------------
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


   // -------------------------
  // Load & Listen to Firebase on login
  // -------------------------
  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        console.log("Not logged in → using local storage only");
        initialized.current = true;
        return;
      }

      console.log("User logged in → Checking Firestore");

      const ref = doc(db, "carts", user.uid);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        console.log("🔥 Initial Fetch from Firebase");
        isSyncingFromFirebase.current = true;
        setCart(snap.data().items || []);
      }

      initialized.current = true;

      // Subscribe to realtime changes
      const unsubSnapshot = onSnapshot(ref, (snapshot) => {
        if (!snapshot.exists()) return;
        console.log("🔥 Firestore Realtime Change");
        isSyncingFromFirebase.current = true;
        setCart(snapshot.data().items || []);
      });

      return () => unsubSnapshot();
    });

    return () => unsubscribeAuth();
  }, []);

  // -------------------------
  // Save to Firebase ONLY when user changes cart locally (not from Firebase)
  // -------------------------
  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;
    if (!initialized.current) return;

    // Skip saving if this update came from Firestore
    if (isSyncingFromFirebase.current) {
      isSyncingFromFirebase.current = false;
      return;
    }

    console.log("💾 Saving cart to Firebase...");

    const saveToFirestore = async () => {
      await setDoc(doc(db, "carts", user.uid), {
        items: cart,
        updatedAt: Date.now(),
      });
    };

    saveToFirestore();
  }, [cart]);

  // -------------------------
  // Cart Functions
  // -------------------------


  // // -------------------------
  // // Load from Firebase when user logs in
  // // -------------------------
  // useEffect(() => {
  //   const unsub = auth.onAuthStateChanged(async (user) => {
  //     if (!user) {
  //       console.log("Not logged in → using localStorage");
  //       return;
  //     }

  //     const ref = doc(db, "carts", user.uid);
  //     const snap = await getDoc(ref);

  //     if (snap.exists()) {
  //       console.log("🔥 Loaded cart from Firebase:", snap.data());
  //       setIsFromFirebase(true);
  //       setCart(snap.data().items || []);
  //       setIsFromFirebase(false);
  //     }

  //     // Listen for realtime changes
  //     onSnapshot(ref, (snapshot) => {
  //       if (snapshot.exists()) {
  //         console.log("🔥 Realtime update from Firebase");
  //         setIsFromFirebase(true);
  //         setCart(snapshot.data().items);
  //         setIsFromFirebase(false);
  //       }
  //     });
  //   });

  //   return () => unsub();
  // }, []);

  // // -------------------------
  // // SAVE TO FIREBASE (No Infinite Loop)
  // // -------------------------
  // // useEffect(() => {
  // //   const user = auth.currentUser;
  // //   if (!user) return;
  // //   if (isFromFirebase) return; // 🔥 skip Firebase → Local → Firebase loop

  // //   const save = async () => {
  // //     const ref = doc(db, "cart", user.uid);
  // //     await setDoc(ref, {
  // //       items: cart,
  // //       updatedAt: Date.now(),
  // //     });
  // //     console.log("💾 Cart saved to Firebase");
  // //   };

  // //   save();
  // // }, [cart, isFromFirebase]);

  // // -------------------------
  // // Cart functions
  // // -------------------------

  const addItem = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item?.fields?.id === product?.fields?.id);

      if (existing) {
        return prev.map((item) =>
          item?.fields?.id === product?.fields?.id
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        );
      }

      return [...prev, { ...product, quantity: product.quantity || 1 }];
    });
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item?.fields?.id !== id));
  };

  const updateQty = (id, qty) => {
    setCart((prev) =>
      prev.map((item) =>
        item?.fields?.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const totalQuantity = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        updateQty,
        clearCart,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
