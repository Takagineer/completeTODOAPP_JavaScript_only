import "./styles.css";

const onClickAdd = () => {
  //1
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);

  //div生成するときはcreateElementを使用する②
};

//⑥未完了リストから指定の要素を削除する関数の記述
const deletFromIncompleteList = (target) => {
  // const deleteTarget = deleteButton.parentNode;
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数15
const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成②
  const li = document.createElement("li");
  li.innerText = text;

  //buttonタグ(完了)生成④
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //buttonタグ(完了)⑤実装。押された完了ボタンのリストを未完了リストから削除する。下と処理が被っているので関数にして共通化する。
    deletFromIncompleteList(deleteButton.parentNode);
    // const deleteTarget = deleteButton.parentNode;
    // document.getElementById("incomplete-list").removeChild(deleteTarget);

    //完了リストに追加する要素⑦
    const addTarget = completeButton.parentNode;
    //TODO内容テキストの取得。⑧
    const text = addTarget.firstElementChild.innerText;
    //div以下を初期化⑨
    addTarget.textContent = null;
    //liタグ生成⑩
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグ生成Ⅺ
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    //ボタンにイベントを付与する14
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグを完了リストから削除する
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-area").removeChild(deleteTarget);

      //完了リストからテキストを取得する15
      const text = backButton.parentNode.firstChild.innerText;
      createIncompleteList(text);
    });

    //divタグの子要素に各要素を設定ⅻ
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加13
    document.getElementById("complete-area").appendChild(addTarget);
  });

  //buttonタグ(削除)生成④
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを未完了リストから削除する
    deletFromIncompleteList(deleteButton.parentNode);
    //以下2文は上の記述が終了次第削除しても良い。
    // const deleteTarget = deleteButton.parentNode;
    // document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  //divタグの子要素に各要素を設定する。③＋④
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加④
  document.getElementById("incomplete-list").appendChild(div);
};

//1
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
