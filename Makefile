build:
	@docker build -t compocrew .

sh:
	@docker run -it -v .:/app -p 127.0.0.1:5173:5173 --rm compocrew sh

dev:
	@docker run -it -v .:/app -p 127.0.0.1:5173:5173 --rm compocrew npm run dev -- --host 0.0.0.0

up:
	@docker run -it -v .:/app -p 127.0.0.1:5173:5173 --rm compocrew npm run build