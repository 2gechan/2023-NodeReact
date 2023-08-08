document.addEventListener("DOMContentLoaded", () => {
  const btn_insert = document.querySelector("button.bbs.insert");
  const b_image = document.querySelector("#b_image");
  const b_images = document.querySelector("#b_images");

  const mainImageThumb = document.querySelector("div.image.main");
  const galleryImageThumb = document.querySelector("div.image.gallery");

  b_images?.addEventListener("change", (e) => {
    // galleryImageThumb.innerHTML = "";
    // imagesPreview(e, galleryImageThumb);

    const files = e.target.files;
    galleryImageThumb.innerHTML = "";
    for (let file of files) {
      const reader = new FileReader();

      reader.onload = (fe) => {
        const img = document.createElement("img");
        img.src = fe.target.result;
        img.width = 100;
        img.height = 100;
        galleryImageThumb.appendChild(img);
      };
      // 업로드된 파일 읽기가 끝나면 reader.onload 함수가 실행
      reader.readAsDataURL(file);
    }
  });

  // type="file"인 input box에서 파일을 선택한 후 발생하는 event
  b_image?.addEventListener("change", (e) => {
    const file = e.target.files[0];
    // const img = document.createElement("img");
    // img.src = URL.createObjectURL(file);
    // img.width = 100;
    // img.height = 100;
    // mainImageThumb.innerHTML = "";
    // mainImageThumb.appendChild(img);
    // ---------------------------------------------------------------
    // input box e.target으로 부터 files 객체를 참조하고
    // 0번째 요소만 getter
    // const file = e.target.files[0];
    const reader = new FileReader();
    // readAsDataURL() 함수가 실행되어 파일의 정보를 모두 읽은 후
    // 발생하는 reader의 event
    reader.onload = (fe) => {
      const img = document.createElement("img");
      console.log(fe.target.result);
      img.src = fe.target.result;
      img.width = 100;
      mainImageThumb.innerHTML = "";
      mainImageThumb.appendChild(img);
    };
    // input 에서 선택한 파일을 읽어서 그 파일의 정보를 DataURL 이라는
    // 객체로 변환한다.
    reader.readAsDataURL(file);
  });

  btn_insert?.addEventListener("click", () => {
    // GET /bbs/insert 요청하기
    document.location.href = "/bbs/insert";
  });
});
