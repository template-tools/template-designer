
post_install() {
	gzip -9 {{installdir}}/*.html {{installdir}}/*.css {{installdir}}/*.mjs {{installdir}}/*.json
	systemctl reload nginx
}

post_upgrade() {
	systemctl reload nginx
}

post_remove() {
	systemctl reload nginx
}
