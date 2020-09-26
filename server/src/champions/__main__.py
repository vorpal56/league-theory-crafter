from .champions import compile_champion_data, scrape_assets

if __name__ == "__main__":
	compile_champion_data(using="meraki", use="cache")
	# scrape_assets()
	pass