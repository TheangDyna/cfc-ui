const unauthFetcher = async (url) => {
  let data;
  try {
    const res = await fetch(url);
    data = res.json();
  } catch (error) {
    console.log(error);
  }

  return data;
};

export default unauthFetcher;
