import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "./FirebaseConfig"; // Asegúrate de que la ruta sea correcta

interface Conversation {
  title: string;
  messages: string[];
  create_at: Timestamp;
}

const saveConversation = async (title: string, messages: string[]): Promise<void> => {
  try {
    const newConversation: Conversation = {
      title,
      messages,
      create_at: Timestamp.now(),
    };
    await addDoc(collection(db, "conversations"), newConversation);
  } catch (error) {
    console.error("Error saving conversation:", error);
  }
};

export { saveConversation };