---
title: Flutter (ios) Your app is missing support for the following URL schemes
description: First Post
date: "2023-07-08T00:00:00"
url: "/posts/"
tags:
  - ios
  - iphone
  - flutter
  - google
  - firebase
published: true
---

GoogleService-Info.plist
ir a
<key>CLIENT_ID</key>
<string>569945111547-0qngbm14kt5v9bravegjnldrpbp488r1.apps.googleusercontent.com</string>

    y pegarlo en el Info.plist

asi

    	<key>GIDClientID</key>

<!-- TODO Replace this value: -->
<!-- Copied from GoogleService-Info.plist key CLIENT_ID -->

<string>569945111547-0qngbm14kt5v9bravegjnldrpbp488r1.apps.googleusercontent.com</string>

PlatformException(sign_in_failed, com.google.android.gms.common.api.ApiException: 10: , null, null)
I/flutter ( 7092): #0 GoogleSignInApi.signIn (package:google_sign_in_android/src/messages.g.dart:221:7)
I/flutter ( 7092): <asynchronous suspension>
I/flutter ( 7092): #1 GoogleSignInAndroid.\_signInUserDataFromChannelData (package:google_sign_in_android/google_sign_in_android.dart:111:3)
I/flutter ( 7092): <asynchronous suspension>
I/flutter ( 7092): #2 GoogleSignIn.\_callMethod (package:google_sign_in/google_sign_in.dart:278:30)
I/flutter ( 7092): <asynchronous suspension>
I/flutter ( 7092): #3 GoogleSignIn.signIn.isCanceled (package:google_sign_in/google_sign_in.dart:431:5)
I/flutter ( 7092): <asynchronous suspension>
I/flutter ( 7092): ----------------------------------------------------
D/EGL_emulation( 7092): app_time_stats: avg=72.45ms min=4.72ms max=1734.23ms count=32
W/adorgt.eduquest( 7092): Cleared Reference was only reachable from finalizer (only reported once)
