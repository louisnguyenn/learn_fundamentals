#include <stdio.h>
#include <stdlib.h>

struct node
{
    int value;
    struct node *next;
};

struct node *pop(struct node *list)
{
    struct node *ptr;

    ptr = list->next;
    free(list);

    return ptr;
}

// this function 'peeks' at the head of the list
int peek(struct node *head)
{
    return head->value;
}

// this function copies the value of a single node
struct node *copyNode(struct node *original)
{
    // copy node, copy value, don't link to the rest of the list
    struct node *copy;

    copy = newNode(original->value); // goes to the value of the original list

    return copy;
}

struct node *copyList(struct node *list)
{
    struct node *newList = NULL;
    struct node **pos;

    pos = &newList;

    while (list)
    {
        *pos = copyNode(list);
        pos = &((*pos)->next);
        list = list->next; // this will go to the next node in the list
    }

    /* 
        the same operation but written in a for loop
        usually not used often because it's hard to read
                                                            */
    // for (pos = &newList; list; list = list->next)
    // {
    //     *pos = copyNode(list);
    //     pos = &((*pos)->next);
    // }

    return newList;
}

void printNode(struct node *self)
{
    printf("Node address: %p\n", (void *)self);
}

void printList(struct node *list, int h2t, int t2h)
{
    printNode(list);

    if (list)
    {
        printList(list->next, h2t, t2h);
    }

    // will print in order if it comes after the recursion
    // printNode(list);
}

/*
struct node *reverseList(struct node *list)
{
    struct node *newList;

    newList = newNode(list->value);

    reverseList(list->next);
}
*/

int main(int argc, char **argv)
{
    struct node *list = NULL;

    list = push(1, list);
    list = push(2, list);
    list = push(3, list);

    printList(list, 0, 1);

    freeList(list);
    return 0;
}
