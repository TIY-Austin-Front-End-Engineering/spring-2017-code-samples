const True    = (x) => (y) => x
True.toString = () => "True"

const False    = (x) => (y) => y
False.toString = () => "False"

const If    = (b) => (x) => (y) => b(x)(y)
If.toString = () => "If"


const Zero   = (p) => (x) => x
const One    = (p) => (x) => p(x)
const Two    = (p) => (x) => p(p(x))
const Three  = (p) => (x) => p(p(p(x)))
const Four   = (p) => (x) => p(p(p(p(x))))
const Five   = (p) => (x) => p(p(p(p(p(x)))))
const Six    = (p) => (x) => p(p(p(p(p(p(x))))))
const Seven  = (p) => (x) => p(p(p(p(p(p(p(x)))))))
const Eight  = (p) => (x) => p(p(p(p(p(p(p(p(x))))))))
const Nine   = (p) => (x) => p(p(p(p(p(p(p(p(p(x)))))))))

const toNum  = (n) => {
  var calls  = 0;
  return n((i) =>  {
    return i + 1;
  })(calls)
}

const test = (val) => {
  console.log(
    toNum(
      val
    )
  );
}

test(
  If(True)(Five)(Nine)
)

test(
  If(False)(Five)(Nine)
)
