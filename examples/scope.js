{
  function a() { return 1 }
  {
    function a() { return  2 }
    console.log(a() === 2)
  }
  console.log(a() === 1)
}
