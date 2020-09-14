call = () => {
  val = document.getElementById('content').value;
  document.getElementById('hi').innerHTML = val;
  // val = "qry=" + val;
  console.log(val);
  xhr = new XMLHttpRequest();
  url = "http://";
  url += "?qry=" + val;
  xhr.open('GET', url, true);
  xhr.send();
}
