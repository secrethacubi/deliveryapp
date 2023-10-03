import {
  getFirestore,
  collection,
  query,
  doc,
  where,
  getDocs,
  getDoc,
  runTransaction,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { app } from "./firebaseConfig";

const db = getFirestore(app);

export const loginWithEmailAndPassword = async (email, password) => {
  try {
    const usersCollection = collection(db, "users");
    const userQuery = query(usersCollection, where("email", "==", email));
    const querySnapshot = await getDocs(userQuery);

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();

      if (userData.password === password) {
        const user = {
          id: userDoc.id,
          email: email,
          fullname: userData.fullname,
          address: userData.address,
          type: userData.type,
          address: userData.address,
          profile_picture: userData.profile_picture,
        };

        return {
          success: true,
          userData: user,
        };
      } else {
        return {
          success: false,
          message: "User not found.",
        };
      }
    } else {
      return {
        success: false,
        message: "User not found.",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const getProducts = async () => {
  try {
    const productsCollection = collection(db, "products");
    const productsQuery = query(productsCollection);
    const querySnapshot = await getDocs(productsQuery);

    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return products;
  } catch (error) {
    console.error("Error getting products: ", error);
    throw error;
  }
};

export const getOrders = async (user_id) => {
  try {
    const ordersCollection = collection(db, "orders");

    let ordersQuery;

    if (user_id !== null) {
      ordersQuery = query(ordersCollection, where("user_id", "==", user_id));
    } else {
      ordersQuery = query(ordersCollection);
    }

    const querySnapshot = await getDocs(ordersQuery);

    const orders = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return orders;
  } catch (error) {
    console.error("Error getting orders: ", error);
    throw error;
  }
};

export const getSingleOrder = async (order_id) => {
  try {
    console.log(order_id);
    const ordersCollection = collection(db, "orders");
    const orderDocRef = doc(ordersCollection, order_id); // Use the order_id as the document ID
    const orderDocSnapshot = await getDoc(orderDocRef);

    if (!orderDocSnapshot.exists()) {
      return null;
    }

    const orderStatus = orderDocSnapshot.data().status;

    return orderStatus;
  } catch (error) {
    console.error("Error getting order status: ", error);
    throw error;
  }
};
export const updateOrderStatus = async (orderId, newStatus) => {
  try {
    const orderDocRef = doc(db, "orders", orderId);
    await updateDoc(orderDocRef, { status: newStatus });
    return true; // Return true if the update is successful
  } catch (error) {
    console.error("Error updating order status:", error);
    throw error;
  }
};

export const checkOut = async (
  products,
  totalSum,
  fullname,
  email,
  address,
  userId
) => {
  try {
    // Get a reference to the Firestore collection
    const ordersCollectionRef = collection(db, "orders");

    // Create a new order document with a unique ID
    const newOrderDocRef = doc(ordersCollectionRef);

    // Define the data for the new order
    const orderData = {
      user_id: userId,
      product_items: products, // Pass the products array here
      total_sum: totalSum,
      fullname: fullname,
      email: email,
      address: address, // Pass the total sum here
      status: "pending",
    };

    // Set the data in the Firestore document
    await setDoc(newOrderDocRef, orderData);

    return true;
  } catch (error) {
    console.error("Error creating order:", error);
  }
};

export const getCategories = async () => {
  try {
    const categoriesCollection = collection(db, "categories");
    const querySnapshot = await getDocs(categoriesCollection);
    const categories = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return categories;
  } catch (error) {
    console.error("Error getting categories: ", error);
    throw error;
  }
};
