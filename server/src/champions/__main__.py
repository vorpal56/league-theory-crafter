from .champions import compile_champion_data, scrape_assets, compile_new_champion_data

if __name__ == "__main__":
	assets_changed = compile_champion_data(use="live")
	scrape_assets(assets_changed)
	pass