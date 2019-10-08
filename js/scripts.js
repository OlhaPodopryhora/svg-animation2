(function(){
	'use strict';

	var beetroot = document.querySelector('.logo__beetroot'),
		text	 = document.querySelector('.logo__text');

	var beetrootPath = beetroot.getTotalLength(),
		textPath	 = text.getTotalLength();

	beetroot.style.strokeDashoffset = beetrootPath;
	beetroot.style.strokeDasharray  = beetrootPath;

	text.style.strokeDashoffset = textPath;
	text.style.strokeDasharray  = textPath;

	var beetrootTimeline = new TimelineMax(),
		textTimeline     = new TimelineMax();

	beetrootTimeline.to(beetroot, 5, {
		strokeDashoffset: 0,
		onComplete: function() {
			beetrootTimeline.reverse();
		}
	})

	textTimeline.to(text, 20, {
		strokeDashoffset: 0,
		onUpdate: function() {
			if (textTimeline.totalProgress() == 0) {
				textTimeline.restart();
			}
			if (textTimeline.totalProgress() > .15 && !textTimeline.reversed()) {
				textTimeline.reverse();
			}
		}
	});

})();