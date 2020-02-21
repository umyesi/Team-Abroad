export const sendMessage = creds => {
  console.log(creds);
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("mail")
      .add({
        to: "umyesigiorgi@gmail.com",
        from: "teamabroad2019@gmail.com",
        replyTo: [creds.email],
        template: {
          name: "message",
          data: {
            creds
          }
        }
      })
      .then(() => {
        dispatch({ type: "MESSAGE_SENT" });
      })
      .then(
        setTimeout(() => {
          dispatch({ type: "RESET_FORM" });
        }, 10000)
      )
      .catch(err => {
        dispatch({ type: "SENDING_ERROR", err });
      });
  };
};

// from: [creds.email],
// to: ["umyesigiorgi@gmail.com"],

// message: {
//   subject:  ` Message from ${creds.name} ${creds.surname} `,
// text: `'This is the plaintext section of the email body. ' `,
//   html: ` message:  ${creds.message} phone: ${creds.phone}  `

// }
