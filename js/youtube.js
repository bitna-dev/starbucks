// YOUTUBE

// Youtube IFrame API를 비동기로 로드합니다.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
	// <div id="player"></div>
	new YT.Player("player", {
		videoId: "NkXswEdAPck", // 재생할 유튜브 영상 ID
		playerVars: {
			autoplay: true, // 자동 재생 유무
			loop: true, // 반복 재생 유무
			playlist: "NkXswEdAPck", // 반복 재생할 유튜브 영상 ID 목록
		},
		events: {
			// 영상이 준비되었을 때,
			onReady: function (event) {
				event.target.mute(); // 음소거!
			},
		},
	});
}
