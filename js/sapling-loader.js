let animation = new TimelineMax({repeate: -1, repeatDelay: 0.5});

animation.from('.branch', 4, {scaleY: 0, ease: Power1.easeOut}, 'branch')
  .staggerFrom('.leaves span', 0.5, {scale: 0, ease: Power1.easeOut}, 0.5, 0.5, 'branch')
  .to(['.branch', '.leaves span'], 3, {backgroundColor: 'yellow'})
  .to(['.branch', '.leaves span'], 1, {autoAlpha: 0});