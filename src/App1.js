// import React from 'react';
 
 
// const characters = [
//     {
//         id: 1,
//         name: "Wonder Woman",
//         alterEgo: "Diana Prince",
//         alignment: "hero"
//     },
//     {
//         id: 2,
//         name: "Poison Ivy",
//         alterEgo: "Pamela Lillian Isley",
//         alignment: "villain"
//     },
//     {
//         id: 3,
//         name: "Black Canary",
//         alterEgo: "Dinah Drake",
//         alignment: "hero"
//     },
//     {
//         id: 4,
//         name: "Catwoman",
//         alterEgo: "Selina Kyle",
//         alignment: "villain"
//     }
// ];
// const CardListItem = props => {
//     return (


//         <div className="column"
//             style={{

               
//                 width: "10%",
//                 padding: "0 10px",

//             }}
//         >



//             <li>

//             <div className="card"
//                 style={{

//                     boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
//                     padding: "16px",
//                     textAlign: "center",
//                     backgroundColor: "#f1f1f1",
                 
//                 }}
//             >

//                 <p>
//                     <strong>{props.character.name}</strong>
//                 </p>
//                 <p>{props.character.alterEgo}</p>
//                 <p>{props.character.alignment}</p>

//             </div>

//             </li >
//         </div >


//     );
// };

// const CardList = () => {
//     return (

//         // <div className="row"
//         //     style={{
//         //         margin: "0 -5px",
//         //     }}

//         // >

//             <ul style={{ listStyleType: "none" }}>
//                 {characters.map(character => {
//                     return <CardListItem character={character} key={character.id} />;
//                 })}
//             </ul>
//         // </div>

//     );
// };

// export default function App() {
//     return (
//         <div className="App">
//             <CardList />
//         </div>
//     );
// }


