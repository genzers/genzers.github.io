document.write(`
	<header class="header banner">
			<a href="https://genzers.github.io/index.html" >
				<img id="logoimg" src="https://genzers.github.io/images/logo.png" alt="">
			</a>
		<div class="container">
			<div class="row">
				<div class="dropdown">
					<nav class="menu">
						<ul>
							<li><a href="https://genzers.github.io/index.html" style="font-size:20px;">Home</a>
							</li>
						</ul>
						<div class="dropdown-content">
						  <a href="https://genzers.github.io/index.html" onclick="return false;" onmousedown="autoScrollTo('div1');">About Us</a>
						</div>
					</nav>
				</div>

				<div class="dropdown">
					<nav class="menu">
						<ul>
							<li><a href="https://genzers.github.io/subwebsites/team/team.html" style="font-size:20px;" >Team</a>
							</li>
						</ul>
					</nav>
				</div>

				<div class="dropdown">
					<nav class="menu">
						<ul>
							<li><a href="https://genzers.github.io/subwebsites/events/events.html" style="font-size:20px;" >events</a>
							</li>
						</ul>
						<div class="dropdown-content">
						  <a href="https://genzers.github.io/subwebsites/events/Tedx/Tedx.html">TEDx</a>
						</div>
					</nav>
				</div>

				<div class="dropdown">
					<nav class="menu">
						<ul>
							<li><a href="https://genzers.github.io/subwebsites/stories/stories.html" style="font-size:20px;" >stories</a>
							</li>
						</ul>
					</nav>
				</div>
				<div class="container" id="phonecontainer">
					<div class="row">
						<div class="phonetitle">
							<h>Generation Z</h>
						</div>
						<div class="dropdown" id="res">
						<nav class="menu">
							<a class="icon">&#9776;</a>
							<div class="dropdown-content-mobile" style="right: 0;">
								<a href="https://genzers.github.io/index.html" style="font-size:20px;">home</a>
								<a href="https://genzers.github.io/subwebsites/team/team.html" style="font-size:20px;">team</a>
								<a href="https://genzers.github.io/subwebsites/events/events.html" style="font-size:20px;">events</a>
								<a href="https://genzers.github.io/subwebsites/stories/stories.html" style="font-size:20px;">stories</a>
							</div>
						</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
`);
