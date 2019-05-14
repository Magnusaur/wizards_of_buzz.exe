#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.



global x

$r::
   remove()
return

$e::
x = 1
   push()
return

$x::
x = 5
   push()
return



push(){

if (x < 2) {
; this code automatically pushes changes to the Heroku server

MouseMove, 200, 500,

MouseClick

Send {Enter}git add .{Enter}
Send {Enter}git commit -m "test".{Enter}
Send {Enter}git push heroku master{Enter}

if (x < 2) {
SetTimer,push, -27000
}
}
}

remove(){
; This code automatically deletes the media contents

MouseMove, 1000, 500

MouseClick



Send {Enter}node remove.js{Enter}

MouseMove, -400, 500

MouseClick

}

#Persistent


