web: gunicorn rag.wsgi --chdir backend --limit-request-line 8188 --log-file -
worker: REMAP_SIGTERM=SIGQUIT celery --workdir backend --app=rag worker --loglevel=info
beat: REMAP_SIGTERM=SIGQUIT celery --workdir backend --app=rag beat -S redbeat.RedBeatScheduler --loglevel=info
