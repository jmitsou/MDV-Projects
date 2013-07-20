//
//  childBase.h
//  weekOne
//
//  Created by Jeff Mitsou on 6/6/13.
//  Copyright (c) 2013 Jeff Mitsou. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface menuBase : NSObject
{
    int menuEnum;
}

//setting values for menuEnum
typedef enum
{
    BREAKFAST,
    LUNCH,
    DINNER
    
} menuEnum;

//Set values
@property NSString *statment;
@property int total;


// initialize
-(id)init;

//calculate
-(void)findTotal;
@end
