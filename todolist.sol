pragma solidity >=0.5.0;

contract ToDoList{
    uint public taskCount=0;
    struct Task{
        uint id;
        string content;
        bool completed;
    }

    constructor() public{
        createTask("Check Out Lokesh's ToDoList app");
    }

    mapping (uint => Task) public tasks;
    function createTask(string memory _content) public{
        taskCount++;
        tasks[taskCount]=Task(taskCount, _content, false);
    }
}
