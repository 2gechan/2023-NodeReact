const URL = { HELLO: "/bbs", INSERT: "/bbs/insert", BBS_LIST: "bbs/list" };

export const hello = async () => {
  const res = await fetch(URL.HELLO);
  const json = await res.json();
  console.log(json);
  return json.title;
};

export const getBbsList = async () => {
  try {
    const response = await fetch(URL.BBS_LIST);
    const bbsList = await response.json();
    console.table(bbsList);
    return bbsList;
  } catch (error) {
    return [];
  }
};

export const bbsInsert = async (formData) => {
  const fetchData = {
    method: "POST",
    body: formData,
  };
  const response = await fetch(URL.INSERT, fetchData);
};
