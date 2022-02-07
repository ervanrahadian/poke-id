export const getFormattedText = (str) => {
  return str.replace(/-/gi, " ").toUpperCase();
};

export const getHeightWeight = (num) => {
  return num / 10;
};

export const getOwned = (name) => {
  let myPokeData;

  if (localStorage.hasOwnProperty("myPoke")) {
    myPokeData = JSON.parse(localStorage.getItem("myPoke"));

    return myPokeData.filter((data) => data.name === name).length;
  } else {
    return 0;
  }
};

export const checkDuplicateData = (nickname) => {
  let myPokeData;

  if (localStorage.hasOwnProperty("myPoke")) {
    myPokeData = JSON.parse(localStorage.getItem("myPoke"));

    const check = myPokeData.filter(
      (data) => data.nickname === nickname
    ).length;

    if (check > 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
