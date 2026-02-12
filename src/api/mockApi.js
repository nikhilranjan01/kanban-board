export const fakeApi = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.2 ? reject("API Failed") : resolve("Success");
    }, 1500);
  });
