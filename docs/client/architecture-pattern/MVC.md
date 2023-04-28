MVC是一种常见的软件架构模式，用于将应用程序分解为三个主要组件：模型（Model）、视图（View）和控制器（Controller）。

Three important MVC components are:

Model: It includes all the data and its related logic
View: Present data to the user or handles user interaction
Controller: An interface between Model and View components

### ![122118_0445_MVCTutorial1](https://lqy-blog.oss-cn-hangzhou.aliyuncs.com/122118_0445_MVCTutorial1.webp)

### Model

The model component stores data and its related logic. It represents data that is being transferred between controller components or any other related business logic. For example, a Controller object will retrieve the customer info from the database. It manipulates data and sends back to the database or uses it to render the same data.

It responds to the request from the views and also responds to instructions from the controller to update itself. It is also the lowest level of the pattern which is responsible for maintaining data.

### View

A View is that part of the application that represents the presentation of data.

Views are created by the data collected from the model data. A view requests the model to give information so that it presents the output presentation to the user.

The view also represents the data from charts, diagrams, and tables. For example, any customer view will include all the UI components like text boxes, drop downs, etc.


### Controller

The Controller is that part of the application that handles the user interaction. The controller interprets the mouse and keyboard inputs from the user, informing model and the view to change as appropriate.

A Controller send’s commands to the model to update its state(E.g., Saving a specific document). The controller also sends commands to its associated view to change the view’s presentation (For example scrolling a particular document).

### example

https://github.com/ArjanCodes/2022-gui
