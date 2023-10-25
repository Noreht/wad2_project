import { db } from  "@/utils/firebase/firebaseInit.js";
import {
    collection,
    query,
    where,
    doc,
    getDocs,
    getDoc,
} from "firebase/firestore";

// MODULE COLLECTION

// Get All Events
export async function getAllEvents() {
    const eventsColRef = collection(db, "Events");
    const querySnapshot = await getDocs(eventsColRef);
    let events = [];
    querySnapshot.forEach((doc) => {
        const eventData = doc.data();
        const event = {
            id: doc.id,
            ...eventData,
        };
        events.push(event);
    });
    if (events.length > 0) {
        console.log(events);
    } else {
        console.log("No data or query error");
    }
    return events;
}


// Get All Volunteers
export async function getAllVolunteers() {
    const volunteersColRef = collection(db, "Volunteers");
    const querySnapshot = await getDocs(volunteersColRef);
    let volunteers = [];
    querySnapshot.forEach((doc) => {
        const volunteerData = doc.data();
        const volunteer = {
            id: doc.id,
            ...volunteerData,
        };
        volunteers.push(volunteer);
    });
    if (volunteers.length > 0) {
        console.log(volunteers);
    } else {
        console.log("No data or query error");
    }
    return volunteers;
}





// export async function getModuleTerms(moduleCode) {
//     const sectionColRef = collection(db, "Modules", moduleCode, "Sections");
//     const querySnapshot = await getDocs(sectionColRef);
  
//     let terms = [];
  
//     querySnapshot.forEach((section) => {
//       // Transforms `AY2223T1G1` to `AY2223/1`
//       const term = section.id.split("G")[0].split("T").join("/");
  
//       const sectionData = section.data();
//       const sectionTerm = {
//         term: term,
//         ...sectionData,
//       };
//       terms.push(sectionTerm);
//     });
  
//     if (terms.length > 0) {
//       console.log(terms);
//     } else {
//       console.log("No data or query error");
//     }
//     return terms;
//   }