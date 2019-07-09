deploy:
	$(call upload_data,core-admin-ui)

.PHONY: deploy

define upload_data
	aws s3 rm s3://$(1) --recursive
	npm run build
	aws s3 cp dist/build.js s3://$(1)/dist/
	aws s3 cp index.html s3://$(1)/
	aws s3api put-object-acl --bucket $(1) --key index.html --acl public-read
	aws s3api put-object-acl --bucket $(1) --key dist/build.js --acl public-read
endef
