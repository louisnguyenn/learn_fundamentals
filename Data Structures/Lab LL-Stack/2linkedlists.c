#include <stdio.h>
#include <stdlib.h>
struct Node
{
    int data;
    struct Node *next;
};
// A print function to view results
void printList(struct Node *head)
{
    struct Node *temp = head;
    while (temp != NULL)
    {
        printf("%d -> ", temp->data);
        temp = temp->next;
    }
    printf("NULL\n");
}
void deleteLastNode(struct Node *head)
{
}

int main()
{
    // create the linked list 1->2->3->4(head is 1).
    // add node 5 after node 3 into the linked list
    // delete the last node in the linked list
}