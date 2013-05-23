//
//  ViewController.h
//  testApp 3
//
//  Created by Jeff Mitsou on 5/22/13.
//  Copyright (c) 2013 Jeff Mitsou. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface ViewController : UIViewController
{

}

//Add Function
-(int)add:(NSInteger)numOne secAdd:(NSInteger)numTwo;
//Compare Function
-(BOOL)compare:(NSInteger)valOne compTwo:(NSInteger)valTwo;
//Append Function
-(NSString*)append:(NSString*)thingOne secApp:(NSString*)thingTwo;
@end
