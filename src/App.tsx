const App = () => {
	return (
		<div className="p-[5vw] text-fg1">
			<h1 className="text-5xl font-bold">GrOoVeBoX</h1>
			<div className="mt-12">
				<h2>Everything you need in one retro, groovy home screen.</h2>
			</div>
			<div>
				<div>
					<form>
						<p>
							<label htmlFor="engine">Search Engine</label>
							<select name="engine" id="engine">
								<option value="google">Google</option>
								<option value="bing">Bing</option>
								<option value="duckduckgo">Duck Duck Go</option>
								<option value="stackoverflow">Stack Overflow</option>
								<option value="mdn">MDN</option>
								<option value="reddit">Reddit</option>
							</select>
						</p>
						<p>
							<label htmlFor="search">search the web</label>
							<input type="text" name="search" id="search" />
							<button>Go</button>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default App;
