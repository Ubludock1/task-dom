//import { createElement } from "react";

/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        let element = document.createElement('' + tag);
        element.textContent = content;
        document.getElementsByTagName('body')[0].appendChild(element);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    function chil(div, count, level, max) {
        for (let i = 0; i < count; i++) {
            let newdiv = document.createElement('div');
            newdiv.classList.add('item_' + level);
            if (level != max) {
                div.appendChild(chil(newdiv, count, level + 1, max));
            } else {
                div.appendChild(newdiv);
            }
        }
        return div;
    }

    let newdiv = document.createElement('div');
    newdiv.classList.add('item_' + 1);

    return chil(newdiv, childrenCount, 2, level);
}
/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    let div = document.createElement('div');
    div = generateTree(2, 3);
    for (let i of div.children) {
        let section = document.createElement('section');
        section.classList.add(i.className);
        let child = i.children;
        while (child.length > 0) {
            section.appendChild(child[0]);
        }
        div.replaceChild(section, i);
    }
    return div;
}
