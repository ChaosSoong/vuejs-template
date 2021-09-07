module.exports = plop => {
  plop.setGenerator("pages", {
    // 这里设定的名字，在执行命令行的时候会用到
    description: "create the repeat pages", // 这里是对这个plop的功能描述
    prompts: [
      {
        type: "input", // 问题的类型
        name: "fileName", // 问题对应得到答案的变量名，可以在actions中使用该变量
        message: "your fileName is", // 在命令行中的问题
        default: "page" // 默认值
      }
    ],
    actions: [
      {
        type: "add", // 操作类型，这里是添加文件
        path: "./src/views/{{fileName}}.vue", // 添加的文件的路径
        templateFile: "./plop-temp/temp.vue" // 模板文件的路径
      }
    ]
  });
};
