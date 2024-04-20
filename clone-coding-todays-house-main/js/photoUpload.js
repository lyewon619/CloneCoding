function toggleUploadArea(type) {
    var photoTab = document.getElementById('photo-tab');
    var videoTab = document.getElementById('video-tab');
    var photoBox = document.getElementById('photo-upload-box');
    var videoBox = document.getElementById('video-upload-box');
    var textArea = document.querySelector('.text-area textarea');

    if (type === 'photo') {
        photoBox.style.display = 'block';
        videoBox.style.display = 'none';
        photoTab.classList.add('active');
        photoTab.classList.remove('inactive');
        videoTab.classList.add('inactive');
        videoTab.classList.remove('active');
        textArea.placeholder = "어떤 사진인지 짧은 소개로 시작해보세요.\n다양한 #태그도 추가할 수 있어요.";
    } else if (type === 'video') {
        photoBox.style.display = 'none';
        videoBox.style.display = 'block';
        videoTab.classList.add('active');
        videoTab.classList.remove('inactive');
        photoTab.classList.add('inactive');
        photoTab.classList.remove('active');
        textArea.placeholder = "어떤 동영상인지 짧은 소개로 시작해보세요.\n다양한 #태그도 추가할 수 있어요.";
    }
}

window.onload = function() {
    toggleUploadArea('photo');
};