//this function returns a blob representing webcam and/or microphone stream(or data) 
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || null;

    //we need to pass the stream properties to the getUserMedia function. Here audio and video is true means the blob should represent both webcam and microphone data
    var video_audio_properties = {video: true};

    //we can also set webcam resolution and framerate in the above object.
    //mandatory properties must be satisfied by the getuserMedia otherwise thrown an error.
    //option properties will be satisfied if possible. Error will not be through if not satisfied.
    video_properties = {video: {mandatory: {minWidth: 300, minHeight: 300, minFrameRate: 30}, optional: [{ minFrameRate: 60 }]}};

    function onSuccess(stream)
    {
      document.getElementById("video").src = window.URL.createObjectURL(stream);

      //property of video tag.
      document.getElementById("video").play();
    }

    function onError(error)
    {
      console.log("Video capture error: ", error.code);
    }

    if(navigator.getUserMedia != null)
    {
      navigator.getUserMedia(video_properties, onSuccess, onError);
    }
    else
    {
      alert("webcam API not supported");
    }