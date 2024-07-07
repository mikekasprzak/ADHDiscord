const EXT_TAG_ID = "_ADHDiscord";

// Find or create our style tag
let styleTag = document.getElementById(EXT_TAG_ID);
if (!styleTag) {
	styleTag = document.createElement("style");
	styleTag.id = EXT_TAG_ID;
	styleTag = document.head.appendChild(styleTag);
}

// Set styles
styleTag.textContent =
`[class*="guilds_"] {
	transition: width 0.5s 0.125s;
}

[class*="guilds_"]:not(:hover) {
	width: 4px;
}

#channels {
	--inactive-channel-height: 0lh;	
	&:hover {
		--inactive-channel-height: 2lh;
	}
	
	& li {
		overflow: hidden;
	}
	& li > div[class*="typeDefault_"]:not([class*="mode"]) {
		transition: max-height 0.5s 0.5s;
		max-height: var(--inactive-channel-height);
	}
}

`;

//[class*="sidebar_"] nav {
//}

// li .containerDefault_
//   div .modeUnreadImportant_ (list-item details)
//     div .unread_ .unreadImportant_ (this DIV is optional)
//     div
//       a .link_
//         div .linkTop_
//	     div .iconContainer_ (channel icon)
//           div .name_ (text)
//           div .children_ (invitation and edit-channel buttons)


// .modeUnreadImportant_
// .modeSelected_

