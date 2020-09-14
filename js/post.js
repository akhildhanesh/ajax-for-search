call = () => {
  val = document.getElementById('content').value;
  document.getElementById('hi').innerHTML = val;
  val = "qry=" + val;
  xhr = new XMLHttpRequest();
  url = "http://";
  xhr.open('POST', url, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(val);
}
