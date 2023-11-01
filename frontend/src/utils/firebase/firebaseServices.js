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

//Get all posts 
export async function getAllPosts() {
    const postsColRef = collection(db, "CommunityPosts");
    const querySnapshot = await getDocs(postsColRef);
    let posts = [];
    querySnapshot.forEach((doc) => {
        const postData = doc.data();
        const post = {
            id: doc.id,
            ...postData,
        };
        posts.push(post);
    });
    if (posts.length > 0) {
        console.log(posts);
    } else {
        console.log("No data or query error");
    }
    return posts;
}

//Get All Communities
export async function getAllResources() {
    const resourceColRef = collection(db, "Resources");
    const querySnapshot = await getDocs(resourceColRef);
    let resources = [];
    querySnapshot.forEach((doc) => {
        const resourceData = doc.data();
        const resource = {
            id: doc.id,
            ...resourceData,
        };
        resources.push(resource);
    });
    if (resources.length > 0) {
        console.log(resources);
    } else {
        console.log("No data or query error");
    }
    return resources;
}

// Get All Communities 
export async function getAllCommunities() {
    const communitiesColRef = collection(db, "Community");
    const querySnapshot = await getDocs(communitiesColRef);
    let communities = [];
    querySnapshot.forEach((doc) => {
        const communityData = doc.data();
        const community = {
            id: doc.id,
            ...communityData,
        };
        communities.push(community);
    });
    if (communities.length > 0) {
        console.log(communities);
    } else {
        console.log("No data or query error");
    }
    return communities;
}

export async function getAllRegisteredEvents() {
    const registeredColRef = collection(db, "UserRegisteredEvents");

    const querySnapshot = await getDocs(registeredColRef);
    let registeredEvents = [];
    querySnapshot.forEach((doc) => {
        const registeredData = doc.data();
        const registeredEvent = {
            id: doc.id,
            ...registeredData,
        };
        registeredEvents.push(registeredEvent);
    });
    if (registeredEvents.length > 0) {
        console.log(registeredEvents);
    } else {
        console.log("No data or query error");
    }
    return registeredEvents;
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