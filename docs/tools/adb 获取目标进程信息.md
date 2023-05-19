```bash
# 在 grep 中填写目标进程的名称
pid=$(ps -e|grep -E "com\.xunmeng\.pinduoduo$" | awk '{print $2}')
cat proc/$pid/status
```