class compile {
  constructor(el) {

  }
}

class MVue {
  constructor(options) {
    this.$options = options;
    this.$el = options.el;
    this.$data = options.data;

    // 1. 实现数据观察者 watcher

    // 2. 实现指令解析器 compile 
  }
}