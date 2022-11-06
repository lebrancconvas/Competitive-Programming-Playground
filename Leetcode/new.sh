mkdir L"$1" &&
cd L"$1" &&
go mod init github.com/lebrancconvas/Competitive-Programming-Playground/Leetcode/L"$1" &&
touch main.go &&
touch main_test.go && 
cd .. 