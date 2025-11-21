<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div class="text-gray-900 text-sm">
		<nav
			class="bg-gray-900 text-white px-4 py-3 flex items-center justify-between"
		>
			<div class="flex items-center space-x-4">
				<a href="#" class="text-white hover:text-gray-400">
					<svg
						aria-hidden="true"
						viewBox="0 0 24 24"
						data-view-component="true"
						class="w-8 fill-current"
					>
						<path
							d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"
						></path>
					</svg>
				</a>

				<div class="relative">
					<input
						type="text"
						class="rounded bg-gray-700 placeholder:-white w-72 px-3 py-1"
						placeholder="Search or jump to..."
					/>
					<div class="absolute top-0 right-0 flex items-center h-full">
						<div
							class="border border-gray-600 rounded text-xs text-gray-400 px-2 mr-2"
						></div>
					</div>
				</div>

				<ul class="flex items-center font-semibold space-x-4">
					<li><a href="#" class="hover:text-grey-400"></a>Pull Requests</li>
					<li><a href="#" class="hover:text-grey-400"></a>Issues</li>
					<li><a href="#" class="hover:text-grey-400"></a>Marketplace</li>
					<li><a href="#" class="hover:text-grey-400"></a>Explore</li>
				</ul>
			</div>
			<div class="flex items-center space-x-4 text-white">
				<a href="#" class="relative hover:text-gray-400">
					<svg
						aria-hidden="true"
						viewBox="0 0 16 16"
						data-view-component="true"
						class="w-5 fill-white"
					>
						<path
							d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"
						></path>
					</svg>
					<div class="bg-blue-600 rounded w-2 h-2 absolute top-0 right-0"></div>
				</a>
				<a href="#" class="flex items-center hover:text-gray-400">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 4.5v15m7.5-7.5h-15"
						/>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-3 ml-1"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m19.5 8.25-7.5 7.5-7.5-7.5"
						/>
					</svg>
				</a>
				<a href="#" class="flex items-center hover:text-gray-400">
					<img src="https://avatars.githubusercontent.com/u/135309917?v=4" class="w-5 h-5 rounded-full" alt="avatar"></img>
				
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-3 ml-1"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m19.5 8.25-7.5 7.5-7.5-7.5"
						/>
					</svg>
				</a>
			</div>
		</nav>

		<div class="repo-stats flex items-center justify-between px-8 py-4">
			<div class="flex">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" class="w-4 fill-current text-gray-600">
  				<path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
				</svg>
				<div class="flex items-center text-xl ml-2">
					<a href="#" class="text-blue-600 hover:underline">tailwindcss</a>
					<span class="ml-1">/</span>
					<a href="#" class="text-blue-600 hover:underline font-semibold ml-1">tailwindcss</a>
				</div>
			</div>
			<div class="flex space-x-2">
				<div class="flex text-xs">
					<button class="border border-gray-400 rounded rounded-r-none px-3 py-1 flex items-center space-x-1">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill="white" class="stroke-gray-600" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill="white" class="stroke-gray-600" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
						</svg>
						<div>Watch</div>
						<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-3 ml-1"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m19.5 8.25-7.5 7.5-7.5-7.5"
						/>
					</svg>
					</button>
					<a href class="border border-gray-400 rounded rounded-l-none border-l-0 font-semibold hover:text-blue-600 px-3 py-1">430</a>
				</div>
				<div class="flex text-xs">
					<button class="border border-gray-400 rounded rounded-r-none px-3 py-1 flex items-center space-x-1">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 ml-1">
  					<path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
						</svg>
						<div>Star</div>
						<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-3 ml-1"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m19.5 8.25-7.5 7.5-7.5-7.5"
						/>
					</svg>
					</button>
					<a href class="border border-gray-400 rounded rounded-l-none border-l-0 font-semibold hover:text-blue-600 px-3 py-1">430</a>
				</div>
				<div class="flex text-xs">
					<button class="border border-gray-400 rounded rounded-r-none px-3 py-1 flex items-center space-x-1">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="w-4 ml-1">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2" /><path d="M12 12l0 4" />
						</svg>
						<div>Fork</div>
						<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-3 ml-1"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m19.5 8.25-7.5 7.5-7.5-7.5"
						/>
					</svg>
					</button>
					<a href class="border border-gray-400 rounded rounded-l-none border-l-0 font-semibold hover:text-blue-600 px-3 py-1">430</a>
				</div>
			</div>
		</div>

		<ul class="repo-nav border-b border-gray-400 flex items-center px-8 mt-4">
			<li class="font-semibold">
				<a href="#" class="flex items-center border-b-2 border-red-500 px-4 pb-3">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="w-4">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" class="stroke-gray-600" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
					</svg>
					<span class="ml-2">Code</span>
				</a>
				<li>
					<a href="#" class="flex items-center border-b-2 border-transparent hover:border-gray-400 transition ease-in-out duration-150 px-4 pb-3">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-5">
  				<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" class="stroke-gray-600" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
					</svg>
					<span class="ml-2">Issues</span>
						<div class="text-xs rounded-lg bg-gray-300 px-2 ml-1">106</div>
				</a>
				</li>
				<li>
					<a href="#" class="flex items-center border-b-2 border-transparent hover:border-gray-400 transition ease-in-out duration-150 px-4 pb-3">
					<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5 fill-gray-600">
					<path fill-rule="evenodd" d="M4.75 3a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zM1.5 4.75a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0zM4.75 17.5a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zM1.5 19.25a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0zm17.75-1.75a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zM16 19.25a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0z"></path>
					<path fill-rule="evenodd" d="M4.75 7.25A.75.75 0 015.5 8v8A.75.75 0 014 16V8a.75.75 0 01.75-.75zm8.655-5.53a.75.75 0 010 1.06L12.185 4h4.065A3.75 3.75 0 0120 7.75v8.75a.75.75 0 01-1.5 0V7.75a2.25 2.25 0 00-2.25-2.25h-4.064l1.22 1.22a.75.75 0 01-1.061 1.06l-2.5-2.5a.75.75 0 010-1.06l2.5-2.5a.75.75 0 011.06 0z"></path>
					</svg>
					<span class="ml-2">Pull Requests</span>
						<div class="text-xs rounded-lg bg-gray-300 px-2 ml-1">25</div>
				</a>
				</li>
				<li>
					<a href="#" class="flex items-center border-b-2 border-transparent hover:border-gray-400 transition ease-in-out duration-150 px-4 pb-3">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 stroke-gray-600">
					<path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
					</svg>

					<span class="ml-2">Discussions</span>
				</a>
				</li>
				<li>
					<a href="#" class="flex items-center border-b-2 border-transparent hover:border-gray-400 transition ease-in-out duration-150 px-4 pb-3">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 stroke-gray-600">
					<path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
					<path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
					</svg>
					<span class="ml-2">Actions</span>
				</a>
				</li>
				<li>
					<a href="#" class="flex items-center border-b-2 border-transparent hover:border-gray-400 transition ease-in-out duration-150 px-4 pb-3">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 stroke-gray-600">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
					</svg>
					<span class="ml-2">Security</span>
				</a>
				</li>
				<li>
					<a href="#" class="flex items-center border-b-2 border-transparent hover:border-gray-400 transition ease-in-out duration-150 px-4 pb-3">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 stroke-gray-600">
					<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
					</svg>
					<span class="ml-2">Insights</span>
				</a>
				</li>
				
			</li>
		</ul>
	</div>
</template>

<script></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
