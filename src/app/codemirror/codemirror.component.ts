import { Component, OnInit } from '@angular/core';
import * as CodeMirror from 'codemirror';
// import 'codemirror/mode/python/python.js'
import 'codemirror/mode/python/python.js'
import 'codemirror/addon/hint/show-hint.js'
import 'codemirror/addon/selection/active-line'
import 'codemirror/addon/fold/foldgutter'
import 'codemirror/addon/fold/foldcode'
import 'codemirror/addon/fold/brace-fold'
import 'codemirror/addon/fold/comment-fold'
import 'codemirror/addon/fold/indent-fold'
// import 'codemirror/addon/hint/show-hint.css'
// import 'codemirror/theme/ambiance.css'



@Component({
  selector: 'app-codemirror',
  templateUrl: './codemirror.component.html',
  styleUrls: ['./codemirror.component.less']
})
export class CodemirrorComponent{
  // 2. 定义CodeMirror组件所需要的变量

  code: any = ''; // 双向绑定，获取输入的sql语句

  cmOptions: any = { // codemirror组件的配置项
    lineNumbers: true, // 显示行号
    styleActiveLine: true, // 当前行背景高亮
    lineWrapping: true, // 自动换行
    mode: 'python', // 定义mode
    theme: 'elegant', // 设置黑色主题
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
    extraKeys: {
      'Ctrl': 'autocomplete', // 提示快捷键
      Tab: function (cm) {
        const spaces = Array(cm.getOption('indentUnit') + 1).join(' ');
        cm.replaceSelection(spaces);
      }
    }, // 自动提示配置
  };
}

