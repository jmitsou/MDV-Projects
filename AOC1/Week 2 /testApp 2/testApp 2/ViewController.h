//
//  ViewController.h
//  testApp 2
//
//  Created by Jeff Mitsou on 5/16/13.
//  Copyright (c) 2013 Jeff Mitsou. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface ViewController : UIViewController
{
    UILabel * bookTitle;
    UILabel * authorBlock;
    UILabel * authorName;
    UILabel * publisherBlock;
    UILabel * publisherDate;
    UILabel * summaryBlock;
    UILabel * summaryP;
    UILabel * listBlock;
    UILabel * listArray;
    
    //String items
    NSString * item1;
    NSString * item2;
    NSString * item3;
    NSString * item4;
    NSString * item5;
    
    //NS Array
    NSArray * arrayItems;
    
    //Mutable String
    NSMutableString * array;
}


@end
