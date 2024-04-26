// loginUser.js

export const loginUser = async () => {
  const identifier = "milad@mail.dk";
  const password = "123456";

  try {
    const response = await fetch("https://dinmaegler.onrender.com/auth/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: identifier,
        password: password,
      }),
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error('Login failed');
  }
};
