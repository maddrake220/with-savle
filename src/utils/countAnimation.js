export const countAnimation = (setLikes, likes, duration) => {
  const stepTime = Math.abs(Math.floor(duration / (likes - 0)));
  let currentNumber = 0;
  const counter = setInterval(() => {
    currentNumber += 1;
    setLikes(currentNumber);
    if (currentNumber === likes) {
      clearInterval(counter);
      setLikes(likes);
    }
  }, stepTime);
};
