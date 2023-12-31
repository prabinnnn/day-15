const pagination = (page = 1, size = 5) => {
  for (let i = page - 1; i < size; i++) {
    console.log(page[i]);
  }
};
