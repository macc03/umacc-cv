export const appear = {
  mounted(el, binding) {
    binding.addClass = () => {
      const { top } = el.getBoundingClientRect()
      const h = document.documentElement.clientHeight || document.body.clientHeight


      if (top < h - 50) {
        if (binding.value.type === 'style') {
          let temp = binding.value
          for (let i in temp) {
            if (i === 'type') { continue }
            el.style[i] = temp[i]
          }
        } else {
          let classList = binding.value.split(' ')
          for (let i of classList) {
            el.classList.add(i)
          }
        }
        if (binding.addClass) {
          window.removeEventListener('scroll', binding.addClass)
        }
      }
      //  else {
      //   if (typeof binding.value !== 'string') {
      //     let temp = binding.value
      //     for (let i in temp) {
      //       if (i === 'type') { continue }
      //       el.style[i] = ''
      //     }
      //   } else {
      //     let splitClass = binding.value.split(' ')
      //     for (let i of splitClass) {
      //       el.classList.remove(i)
      //     }
      //   }
      // }
    }

    window.addEventListener('scroll', binding.addClass, true)

    binding.addClass()
  },
  unbind(el, binding) {
    if (binding.addClass) {
      window.removeEventListener('scroll', binding.addClass)
      console.log('取消事件绑定')
    }
  }
}