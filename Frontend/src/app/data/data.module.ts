import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinearDoubleLinkedListComponent } from './linear-double-linked-list/linear-double-linked-list.component';
import { LinkedSimpleLinearListComponent } from './linked-simple-linear-list/linked-simple-linear-list.component';
import { SimpleCircularLinkedListComponent } from './simple-circular-linked-list/simple-circular-linked-list.component';
import { DoubleLinkedCircularListComponent } from './double-linked-circular-list/double-linked-circular-list.component';
import { QueueComponent } from './queue/queue.component';
import { StackComponent } from './stack/stack.component';
import { BinaryTreeComponent } from './binary-tree/binary-tree.component';
import { GraphsComponent } from './graphs/graphs.component';
import { DatabaseComponent } from './database/database.component';

@NgModule({
  declarations: [
    LinearDoubleLinkedListComponent,
    LinkedSimpleLinearListComponent,
    SimpleCircularLinkedListComponent,
    DoubleLinkedCircularListComponent,
    QueueComponent,
    StackComponent,
    BinaryTreeComponent,
    GraphsComponent,
    DatabaseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LinearDoubleLinkedListComponent,
    LinkedSimpleLinearListComponent,
    SimpleCircularLinkedListComponent,
    DoubleLinkedCircularListComponent,
    QueueComponent,
    StackComponent,
    BinaryTreeComponent,
    GraphsComponent,
    DatabaseComponent
  ]
})

export class DataModule { }
