function redirectToNewPage() {
    // 새로운 페이지 요소 생성
    var newPageContent = document.createElement('div');
    newPageContent.innerHTML = `
        <h2>새로운 페이지</h2>
        <p>이 페이지는 임시로 생성되었습니다.</p>
        <a href="javascript:void(0)" onclick="goBack()">이전 페이지로 돌아가기</a>
    `;
    document.body.innerHTML = ''; // 현재 페이지 내용 삭제
    document.body.appendChild(newPageContent); // 새로운 페이지 추가
}

function goBack() {
    window.location.reload(); // 페이지 새로고침으로 이전 페이지로 돌아가기
}